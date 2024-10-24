import { ChampionContainer, MainContainer, SkinCard, SkinContainer } from "./styles"
import { useEffect, useRef, useState } from "react"
import { getChampions } from "../../services/championService"

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

  useEffect(() => {
    getChampions().then(champions => {
      setChampions(champions.attributes)
    })
  }, [])

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
    <MainContainer ref={mainContainerRef}>
      <h1>Skins Page</h1>
      {champions.slice(0, 15).map((champion, index) => (
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
                  <span>{skin.name}</span>
                </SkinCard>
              )
            ))}
          </SkinContainer>
        </ChampionContainer>
      ))}
    </MainContainer>
  )
}