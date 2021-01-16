import React, { useState } from 'react';
import axios from 'axios';

import ImageList from './imageList';


const SearchBar = (value: any) => {

    const [term, setTerm] = useState('')
    const [images, setImages] = useState([]);

    const onSearchSubmit = async (term: string) => {
        try {
            const params = {
                key: "19808198-9a2904ae2706f23235bd99013",
                q: term,
            };
            const response = await axios.get("https://pixabay.com/api/", { params });
            setImages(response.data.hits);
            if (response.data.total === 0) {
                window.alert('お探しの画像はありません。');
            }
        } catch {
            window.alert('写真の取得に失敗しました。');
        }
    };

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(term);
        onSearchSubmit(term);
    };

    return (
        <div className='ui segment'>
            <div className='ui segment'>
                <form onSubmit={onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            name="search"
                            placeholder=""
                            value={term}
                            onChange={(event) => {
                                setTerm(event.target.value);
                            }}
                        />
                    </div>
                </form>
            </div>
            <div className='image segument' style={{marginTop:'20px'}}>
                    <ImageList images={images} />
            </div>
        </div>
    );
};

export default SearchBar;
