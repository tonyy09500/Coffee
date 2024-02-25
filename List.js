import Counter from "./Counter";
import Style from "./List.module.scss";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const List = (props) => {
    const {name, price, isLimited, image, desrc} = props.item;
    return(
        <li className={Style.item}>
            <LazyLoadImage
            src={image}
            alt=""
            style={{
            width: "80px",
            height: "80px",
            backgroundColor: "#ffe691"
            }}
        />
            <div className={Style.name}>
                <span>{name}</span>
                {isLimited && <span className={Style.limited}>（限量供應）</span>}
            </div>
            <div className={Style.desrc}>
            <div dangerouslySetInnerHTML={{ __html: desrc }}></div>
            </div>
            <span>＄{price}</span>
            <Counter />
        </li>
    );
};

export default List;