import { useState } from 'react';
import { Input, Message, Pagination } from 'semantic-ui-react';
import { ITEMS_PER_PAGE } from '../constants';
import { Repository } from '../types';
import ReposTable from './ReposTable';

function HomePage ({ data }: {data: Repository[]}) {
  const [search, setSearch] = useState('');
  const [activePage, setActivePage] = useState(1);

  const filteredData: Repository[] = data
    .filter(({ owner, name }) => owner.login.includes(search) || name.includes(search));
  const currentPageItems: Repository[] = filteredData
    .slice(activePage * ITEMS_PER_PAGE - ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  if (totalPages && (activePage > totalPages)) setActivePage(totalPages);
  
  return <>
    <Input value={search} 
      onChange={(_e, { value }) => setSearch(value)}
      icon='search' 
      placeholder='Search...'
    />
    <div className="pagination-wrapper">
      <Pagination
        activePage={activePage}
        onPageChange={(_e, { activePage }) => setActivePage(Number(activePage))}
        size='mini'
        boundaryRange={0}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={totalPages}
      />
    </div>
    { currentPageItems.length ?
      <ReposTable data={currentPageItems} /> :
      <Message negative>No results found for <i>{search}</i></Message> }
  </>
}

export default HomePage;