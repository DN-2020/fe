import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import "./Search.css";
import { Card, Rate } from "antd";
import Search_Modal from './component/Search_Modal';
const { Meta } = Card;

const Search_Body = (props) => {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [modal, setModal] = useState(false);
    const [filter, setFilter] = useState({});
    const [filterCat, setFilterCat] = useState("");
    const onOK = (keyword, data) => {
        setModal(!modal);
        console.log(data, keyword);
    }

    const onCancle = () => {
        setModal(!modal);
    }
    useEffect(() => {
         setData([
            { id: 1, title: "abcdefg", content: "fsfdss", image: "logo192.png", rate: "1", date: "2020-09-18", category: "moto", location: "부산광역시 부산진구 만리산로 100번길 32-8" },
            { id: 2, title: "abcdefg", content: "fsdafs", image: "logo192.png", rate: "1", date: "2020-09-19", category: "moto", location: "부산광역시 부산진구 만리산로 100번길 32-8" },
            { id: 3, title: "abcdefg", content: "fsfs", image: "logo192.png", rate: "2", date: "2020-09-18", category: "moto", location: "부산광역시 부산진구 만리산로 100번길 32-8" },
            { id: 4, title: "abcdefg", content: "fsasfs", image: "logo192.png", rate: "3", date: "2020-09-12", category: "lodg", location: "부산광역시 부산진구 만리산로 100번길 32-8" },
            { id: 5, title: "abcdefg", content: "fssfs", image: "logo192.png", rate: "4", date: "2020-09-18", category: "moto", location: "부산광역시 부산진구 만리산로 100번길 32-8" },
            { id: 6, title: "abcdefg", content: "fsfs", image: "logo192.png", rate: "1", date: "2020-09-18", category: "moto", location: "부산광역시 부산진구 만리산로 100번길 32-8" },
            { id: 7, title: "abcdefg", content: "fsdafs", image: "logo192.png", rate: "5", date: "2020-09-18", category: "moto", location: "부산광역시 부산진구 만리산로 100번길 32-8" },
            { id: 8, title: "abcdefg", content: "fssdfs", image: "logo192.png", rate: "2", date: "2020-09-18", category: "moto", location: "부산광역시 부산진구 만리산로 100번길 32-8" },
            { id: 9, title: "abcdefg", content: "fsf1s", image: "logo192.png", rate: "4", date: "2020-09-18", category: "moto", location: "부산광역시 부산진구 만리산로 100번길 32-8" },
            { id: 10, title: "abcdefg", content: "fsfs", image: "logo192.png", rate: "3", date: "2020-09-18", category: "moto", location: "부산광역시 부산진구 만리산로 100번길 32-8" },
            { id: 11, title: "abcdefg", content: "fadsdfs", image: "logo192.png", rate: "1", date: "2020-09-18", category: "moto", location: "부산광역시 부산진구 만리산로 100번길 32-8" },
            { id: 12, title: "abcdefg", content: "fsfs", image: "logo192.png", rate: "1", date: "2020-09-18", category: "moto", location: "부산광역시 부산진구 만리산로 100번길 32-8" },
            { id: 13, title: "abcdefg", content: "fzcsfs", image: "logo192.png", rate: "1", date: "2020-09-18", category: "moto", location: "부산광역시 부산진구 만리산로 100번길 32-8" },
            { id: 14, title: "abcdefg", content: "fsfsdfs", image: "logo192.png", rate: "1", date: "2020-09-18", category: "moto", location: "부산광역시 부산진구 만리산로 100번길 32-8" },
            { id: 15, title: "abcdefg", content: "fs123fs", image: "logo192.png", rate: "1", date: "2020-09-18", category: "moto", location: "부산광역시 부산진구 만리산로 100번길 32-8" },
            { id: 16, title: "abcdefg", content: "f42sfs", image: "logo192.png", rate: "1", date: "2020-09-18", category: "moto", location: "부산광역시 부산진구 만리산로 100번길 32-8" },
            { id: 17, title: "abcdefg", content: "fs4fs", image: "logo192.png", rate: "1", date: "2020-09-18", category: "moto", location: "부산광역시 부산진구 만리산로 100번길 32-8" }
        ])
         setFilterData(data);
        return () => {

        }
    }, [])

    return (
        <div className="search_body_container">
            <h2>{JSON.stringify(props.props.props.history.location.search)}</h2>
            <div className="search_body_nav">
                <div className="search_option_date search_btn" onClick={() => {
                    setFilterCat("date");
                    setModal(!modal);
                    console.log(!modal);
                }
                }>날짜</div>
                <div className="search_option_price search_btn" onClick={() => {
                    setFilterCat("price");
                    setModal(!modal);
                    console.log(!modal);
                }
                }>금액</div>
                <div className="search_option_rate search_btn" onClick={() => {
                    setFilterCat("rate");
                    setModal(!modal);
                    console.log(!modal);
                }
                }>평점</div>
                <div className="search_option_location search_btn" onClick={() => {
                    setFilterCat("location");
                    setModal(!modal);
                    console.log(!modal);
                }
                }>여행지</div>
                <div className="filter_reset search_btn" onClick={() => { setFilter({}) }}>필터 초기화</div>
            </div>
            <div className="search_body_content">
                {data.map(element => {
                    console.log(element);
                    return <div className="search_body_item"><Card
                        hoverable
                        cover={<img style={{ height: "100px" }} src={element.image}></img>}
                    >
                        <Meta
                            title={element.title}
                            description={element.location}
                        />
                        <Rate disabled defaultValue={element.rate}></Rate>
                    </Card></div>
                })}
            </div>
            <Search_Modal title={filterCat} category={filterCat} visible={modal} onOK={onOK} onCancle={onCancle} ></Search_Modal>
        </div >
    )
}

Search_Body.propTypes = {

}

export default Search_Body

