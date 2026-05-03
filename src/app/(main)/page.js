
import Banner from "@/components/Banner";
import PopularProducts from "@/components/PopularProducts";
import PromoSection from "@/components/PromoSection";
import SummerCareTips from "@/components/SummerCareTips";
import TopBrands from "@/components/TopBrands";



export default function Home() {

  return (
    <div >
      <Banner></Banner>
      <PromoSection></PromoSection>
      <PopularProducts></PopularProducts>
      <SummerCareTips></SummerCareTips>
      <TopBrands></TopBrands>
    </div>
  );
}
