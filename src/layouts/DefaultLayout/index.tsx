import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { BodyLayout, LayoutContainer } from "./styles";

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <BodyLayout>
                <Outlet />
            </BodyLayout>
        </LayoutContainer>
    )
}