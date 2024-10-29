import { ChampionContainer, MainContainer, MainScrollContainer, SkinCard, SkinContainer } from "./styles"
import { useCallback, useEffect, useRef, useState } from "react"
import { debounce } from "lodash"
import { getChampions } from "../../services/championService"
import { AddSkin } from "./components/AddSkin"

interface Champion {
  champion: string
  niceName: string
  skins: ChampionSkins[]
}

interface ChampionSkins {
  image: string
  name: string
  skin_id: string
}

export function SkinsPage() {
  const containerRef = useRef<(HTMLDivElement | null)[]>([])
  const mainContainerRef = useRef<HTMLDivElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [activateContainerIndex, setActivateContainerIndex] = useState<number | undefined>(undefined)

  const [champions, setChampions] = useState<Champion[]>([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [loadedPages, setLoadedPages] = useState<Set<number>>(new Set())
  const [pendingPages, setPendingPages] = useState<number[]>([])

  const loadChampions = useCallback(async (pageNumber: number) => {
    if(loading || loadedPages.has(pageNumber)) return

    setLoading(true)
    try {
      const data = await getChampions(pageNumber)

      if(data.attributes.length === 0) {
        setHasMore(false)
        return
      }

      setChampions(prevChampions => {
        const newChampions = data.attributes.filter(
          (champion: Champion) => 
            !prevChampions.some(prevChampion => prevChampion.niceName === champion.niceName)
        )
        const updatedChampions = [...prevChampions]
        updatedChampions.splice(pageNumber * 10, 0, ...newChampions)
        return updatedChampions
      })

      setLoadedPages(prevPages => new Set(prevPages).add(pageNumber))
    } catch (error) {
      console.error("Error loading champions", error)
    } finally {
      setLoading(false)

      if(pendingPages.length > 0) {
        const nextPage = pendingPages[0];
        setPendingPages(prevPages => prevPages.slice(1))
        loadChampions(nextPage)
      }
    }
  }, [loading, loadedPages, pendingPages])

  useEffect(() => {
    if (!hasMore || loading) return

    if (!loadedPages.has(page)){
      loadChampions(page)
    }
  }, [page, hasMore, loading, loadedPages, loadChampions])

  const handleScroll = debounce(() => {
    if (!mainContainerRef.current || loading) return
    const { scrollTop, clientHeight, scrollHeight } = mainContainerRef.current

    if (scrollTop + clientHeight >= scrollHeight - 90) {
      const nextPage = page + 1
      if(!loadedPages.has(nextPage))
      setPage(prevPage => prevPage + 1)
    }
  }, 200)

  useEffect(() => {
    const container = mainContainerRef.current
    if (!container) return

    container.addEventListener("scroll", handleScroll)

    return () => {
      container.removeEventListener("scroll", handleScroll)
    }

  }, [handleScroll])

  const handleMouseDown = (index: number, e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    setActivateContainerIndex(index)
    if (containerRef.current[index]) {
      setStartX(e.pageX - (containerRef.current[index]?.offsetLeft || 0))
      setScrollLeft(containerRef.current[index]?.scrollLeft || 0)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || activateContainerIndex === undefined) return;
    e.preventDefault()
    const index = activateContainerIndex
    if (containerRef.current[index] === null) return
    const x = e.pageX - (containerRef.current[index]?.offsetLeft || 0)
    const walk = (x - startX) * 1
    if (containerRef.current) {
      containerRef.current[index].scrollLeft = scrollLeft - walk
    }
  }

  const handleMouseUpOrLeave = () => {
    setIsDragging(false)
    setActivateContainerIndex(undefined)
  }

  return (
    <MainContainer>
      <h1>Skins Page</h1>
      <MainScrollContainer
        ref={mainContainerRef} onScroll={handleScroll}
      >
        {champions.map((champion, index) => (
          <ChampionContainer key={champion.niceName}>
            <h2>{champion.champion}</h2>
            <SkinContainer
              ref={el => {
                if (containerRef.current) {
                  containerRef.current[index] = el;
                }
              }}
              onMouseDown={(e) => handleMouseDown(index, e)}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              style={{ 
                cursor: isDragging && activateContainerIndex === index ? "grabbing" : "grab",
              }}
            >
              {champion.skins.map((skin: ChampionSkins) => (
                skin.name.toLowerCase() !== "default" && (
                  <SkinCard key={skin.skin_id}>
                    <img src={skin.image} alt={skin.name} />
                    <AddSkin skin={skin.skin_id} />
                    <span>{skin.name}</span>
                  </SkinCard>
                )
              ))}
            </SkinContainer>
          </ChampionContainer>
        ))}
      </MainScrollContainer>
      {loading && <p>Loading...</p>}
    </MainContainer>
  )
}