import React from 'react';
import { Table, Image } from 'semantic-ui-react';
import { Repository } from '../types';

function ReposTable ({data}: {data: Repository[]}) {
  // console.log('data', data)
  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine></Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Repository</Table.HeaderCell>
          <Table.HeaderCell>URL</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map(({ owner, name, html_url, description }) => <Table.Row key={html_url}>
          <Table.Cell>
            <Image src={owner.avatar_url} rounded size='small' />
          </Table.Cell>
          <Table.Cell>{owner.login}</Table.Cell>
          <Table.Cell>{name}</Table.Cell>
          {/* TODO: set column max width */}
          <Table.Cell>{html_url}</Table.Cell>
          <Table.Cell>{description}</Table.Cell>
        </Table.Row>)}
      </Table.Body>
    </Table>
)}

export default ReposTable;