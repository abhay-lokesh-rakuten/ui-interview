import search from '../../assets/svg/filter.svg';
import filter from '../../assets/svg/search.svg';
import sort from '../../assets/svg/sort.svg';

export const headers = [
  {
    label:'Id',
  },
  {
    label:'Book Name',
    img: filter,
    filterBy: 'search',
    callback: 'searchData'
  },
   {
    label:'Publisher',
    img: search,
    filterBy: 'dropdown',
    callback: 'searchDropdown'
  },
  {
    label:'Issue Date',
    img: sort,
    filterBy: 'sort',
    callback: 'sortDate'
  },
  {
    label:'Return Date',
    img: sort,
    filterBy: 'sort',
    callback: 'sortDate'
  },
  {
    label:'Status',
  }
]