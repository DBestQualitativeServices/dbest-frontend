import HeroLayout from "../layouts/HeroLayout";
import InlineTitle from "../layouts/InlineTitle";
import ColumnTitle from "../layouts/ColumnTitle";
import CenterColumnTitle from "../layouts/CenterColumnTitle";
import SimpleGrid from "../layouts/SimpleGrid";
import GridWithPhotoes from "../layouts/GridWithPhotoes";
import StoryGrid from "../layouts/StoryGrid";
import FeatureGrid from "../layouts/FeatureGrid";
import Navbar from "../ui/Navbar";
import {useTranslation} from "react-i18next"
import CallToAction from "../layouts/CallToAction";
import BottomBanner from "../ui/BottomBanner";


const Home = () => {
    const {t} = useTranslation()
    const homePageContent = t('homePage', { returnObjects: true })
    const navbar = t('navbar', { returnObjects: true })
    const {hero, customerFailures, customerProblems, accomplishments, expertise, cta} = homePageContent

    return (
        <div
            className={"min-w-screen min-h-screen text-darkShade bg-whiteShade selection:text-whiteShade selection:bg-accent font-poppins"}>
            <Navbar navContent={navbar}/>
            <HeroLayout heroContent={hero}/>
            <main className={"flex flex-col min-w-screen items-stretch"}>
                <InlineTitle sectionContent={customerFailures.heading}/>
                <SimpleGrid grids={customerFailures.possibleFailures}/>
                <ColumnTitle sectionContent={customerProblems.heading}/>
                <GridWithPhotoes grids={customerProblems.possibleProblems}/>
                <CenterColumnTitle sectionContent={accomplishments.heading}/>
                <StoryGrid grids={accomplishments.stories}/>
                <FeatureGrid sectionContent={expertise}/>
                <CallToAction sectionContent={cta} />
            </main>
            <BottomBanner />
        </div>
    )
}

export default Home