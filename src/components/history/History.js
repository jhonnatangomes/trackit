import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Title, LaunchingSoon } from "./historyStyle";

export default function History() {
    return (
        <>
            <Header />
            <main>
                <Title>Histórico</Title>
                <LaunchingSoon>Em breve você poderá ver o histórico dos seus hábitos aqui!</LaunchingSoon>
            </main>
            <Footer />
        </>
    );
}
