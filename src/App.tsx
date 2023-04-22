import { Sidebar } from "./components/sidebar/Sidebar";
import { Header } from "./components/partials/Header";
import { AppWrapper } from "./components/wrappers/AppWrapper";
import { MainSectionWrapper } from "./components/wrappers/MainSectionWrapper";
import { Container } from "./components/wrappers/Container";
import { MenuWrapper } from "./components/wrappers/MenuWrapper";
import { Navigation } from "./components/menus/Navigation";
import { UserPortal } from "./components/menus/UserPortal";
import { MainViewAreaWrapper } from "./components/wrappers/MainViewAreaWrapper";
import { SetttingsWrapper } from "./components/wrappers/SetttingsWrapper";
import { Settings } from "./components/dynamic-views/Settings";
import { ContextProvider } from "./components/context/ContextProvider";
import "./App.css";

function App() {
  return (
    <>
      <ContextProvider>
        <AppWrapper>
          <Sidebar>
            <MenuWrapper rowLayout={false}>
              <Navigation rowLayout={false} />
            </MenuWrapper>
          </Sidebar>
          <Container>
            <Header>
              <MenuWrapper rowLayout={true}>
                <Navigation rowLayout={true} />
                <UserPortal />
              </MenuWrapper>
            </Header>
            <MainSectionWrapper>
              <MainViewAreaWrapper />
              <SetttingsWrapper>
                <Settings />
                <Settings />
              </SetttingsWrapper>
            </MainSectionWrapper>
          </Container>
        </AppWrapper>
      </ContextProvider>
    </>
  );
}

export default App;
