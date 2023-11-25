import Between from "@/Ui/Between";
import Hero from "@/components/hero/Hero";
import Properties from "@/components/properties/Properties";
import Slider from "@/components/slider/Slider";
import dynamic from "next/dynamic";

export default function Home() {

    const HeroComponent = dynamic(() => import("@/components/hero/Hero"));
    const PropertiesComponent = dynamic(() => import("@/components/properties/Properties"));
    const SliderComponent = dynamic(() => import("@/components/slider/Slider"));


    return (
        <main>
            <HeroComponent />
            <Between content="Our Projects" />
            <SliderComponent />
            <Between content="Favorite properties" />
            <PropertiesComponent />
        </main>
    );
}
