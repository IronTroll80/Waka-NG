import { SearchProvider } from '../../context/searchContext'
import Header from "../../components/header";
import TopPromo from "../../components/topPromo";
import Footer from "../../components/footer";
import HeroMarket from "../../components/heroMarket";
import Shop from '../../components/shop';
import Newsletter from '../../components/newsletter';
import Whatsapp from '@/app/components/whatsapp';


interface Props {
  params: Promise<{ category: string }>
}

export default async function Marketplace({ params }: Props) {
  const { category } = await params

  return (
    <SearchProvider>
      <Whatsapp/>
      <TopPromo/>
      <Header/>
      <HeroMarket page='Marketplace'/>
      <Shop category={category}/>
      <Newsletter/>
      <Footer/>
    </SearchProvider>
  )
}
