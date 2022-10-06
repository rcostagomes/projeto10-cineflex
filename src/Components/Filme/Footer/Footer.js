import { BannerFilme } from "./style";


export default function Footer(props){
    const {title, posterURL} = props.Banner;
return(
<BannerFilme>
 <div> <img src= {posterURL} alt={title} />  </div>   

<h1> {title}</h1>
</BannerFilme>
)
}