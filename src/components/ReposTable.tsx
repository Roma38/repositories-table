import React from 'react';
import { Table, Image } from 'semantic-ui-react';
import { Repository } from '../types';

function ReposTable ({ data }: {data: Repository[]}) {
  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Repository</Table.HeaderCell>
          <Table.HeaderCell>URL</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        { data.map(({ owner, name, html_url, description, id }) => (
          <Table.Row key={id}>
            <Table.Cell>
              <Image src={owner.avatar_url} rounded size="small" />
            </Table.Cell>
            <Table.Cell>{owner.login}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>
              <a href={html_url} target="_blank" rel="noreferrer">{html_url}</a>
            </Table.Cell>
            <Table.Cell>{description}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
)}

export default ReposTable;