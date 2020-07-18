//common interface that will be used to represent the search bars selection
export interface ISearchParameters {
    SearchString: (string | null);
    Country: (string | null);
}

export default ISearchParameters