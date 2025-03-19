import React from 'react';
import DefaultInput from "./inputs/DefaultInput/DefaultInput";
import DefaultSelect from "./ui/select/DefaultSelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <DefaultInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            />
            <DefaultSelect
                defaultValue="Сортировка"
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]}
            />
        </div>
    );
};

export default PostFilter;