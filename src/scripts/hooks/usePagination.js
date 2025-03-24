import {useMemo} from "react";

export const usePagination = (totalPages) => {
    const paginationArray = useMemo(() => {
        let result = [];
        for (let i = 0; i < totalPages; i++) {
            result.push(i + 1);
        }
        return result;
    }, [totalPages]);

    return paginationArray;
}