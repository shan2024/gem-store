import { useState, useEffect } from "react";
import Gem from "./Gem";
import { Link  } from "react-router-dom";
import "../styles/Shop.css";

function Shop(props) {
    const [gems, setGems] = useState(returnGems);

    function returnGems() {

        return [
        [  "Sapphire", "$19.99", "Sapphire is any colour of the mineral corundum other than red, those are called ruby, (see above) corundum is composed of aluminium oxide. Sapphires tend to be translucent or transparent and have high amounts of refraction. The most desirable sapphires are generally those with an intense blue colour with plenty of sparkle and life. Various shades of blue result from titanium and iron substitutions in the aluminium oxide crystal lattice."],
        [  "Diamond", "$19.99", "A diamond is a crystal completely made of the element carbon, except for trace impurities such as boron and nitrogen. The arrangement of the carbon atoms or its crystal structure within the diamond gives it its unique properties. As well as being the hardest known material, it is also the least compressible, the stiffest material and the best thermal conductor with an extremely low thermal expansion."],
        [  "Ruby", "$19.99", 'Ruby is the red variety of the mineral called Corundum which is composed of aluminium oxide (any other colour of corundrum is a sapphire, see below). The red colour is caused mainly by chromium and titanium. It is natural for rubies to have imperfections in them, including colour impurities and inclusions of rutile needles known as "silk". Origin of name comes from ruber, Latin for red.'],
        [  "Emerald", "$19.99", "Emerald is a valuable Beryl that owes its colour to chromium or vanadium, which make it the bright green. Origin of name emerald is said to be a Sanskrit word meaning green (Sanskrit is a classical language of India). Emeralds can have many inclusions and flaws so can be brittle and liable to break."],
        [  "Opal", "$19.99", "Opal is a type of quartz. Origin of name: from Sanskrit (Sanskrit is a classical Indian language) upala = precious stone. They are luminous and iridescent with inclusions of many colours. Opals show a play-of-colour (a shifting of spectral colours)."],
        [  "Amber", "$19.99", "Amber is the fossilized resin from ancient forests. In ancient times the resin dripped and oozed down trees, filling fissures and trapping debris such as seeds, leaves, feathers and insects. The resin then became buried and fossilized through a natural polymerisation creating amber. "],
        [  "Citrine", "$19.99", 'Citrine is a form of quartz with ferric iron impurities and is rarely found naturally. Origin of name from the French word "citron" meaning lemon. Also called citrine quartz. Most commercial citrine is in fact heat treated amethyst or smoky quartz.'],
        [  "Aquamarine", "$19.99", 'Aquamarine belongs to the gemstone family of Beryls. Origin of name Latin "aqua" meaning water and "mar" sea. Legend has it that Mermaids tails were made of aquamarine. Aquamarine is usually free of inclusions and possesses a superior brilliance.'],
        [  "Amethyst", "$19.99", 'Amethyst is a transparent purple quartz. Origin of name from the Greek -amethystos- "not drunken". Amethyst was considered to be an antidote against drunkenness. Different localities can produce a unique amethyst to that particular region or even to that particular mine.']
        ]
    }
    
    // useEffect(() => {
    //     setGems( gems.concat( [  "Sapphire", "$19.99"] ))
    //     setGems( gems.concat( [  "Diamond", "$19.99"] ))
    //     setGems( gems.concat( [  "Ruby", "$19.99"] ))
    //     setGems( gems.concat( [  "Emerald", "$19.99"] ))
    //     setGems( gems.concat( [  "Opal", "$19.99"] ))
    //     setGems( gems.concat( [  "Amber", "$19.99"] ))
    //     setGems( gems.concat( [  "Citrine", "$19.99"] ))
    //     setGems( gems.concat( [  "Aquamarine", "$19.99"] ))
    //     setGems( gems.concat( [  "Amethyst", "$19.99"] ))

    // });

    return (
      <div  className = "main" id = "shop">
            <div id="shop-platform">
                <h2 id = "shop-title">Our Collection</h2>
                <div id = "shop-display">
                {gems.map(gem => {
                    return <Link key = {gem[0]} to="/itemdesc" onClick={() => props.setSelectedItem(gem) } className = "shop-link"><Gem className = "shop-gem" name={gem[0]} cost={gem[1]} /></Link>
                })}
                </div>
                
            </div>
        </div>
    );
  }
  
  export default Shop;