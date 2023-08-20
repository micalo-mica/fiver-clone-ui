import { Link } from "react-router-dom";
import styled from "styled-components";
import pic from "../assets/mman.png";
import { AiTwotoneDelete } from "react-icons/ai";

const M = styled.div`
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.widthLg};
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    max-width: ${({ theme }) => theme.sizes.widthLgPhone};
    column-gap: 0rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const TitleText = styled.h2`
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const TitleBtn = styled.button`
  background-color: #1dbf73;
  color: white;
  font-weight: 500;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 0.3rem;
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const TableContainer = styled.div`
  width: 100%;
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Table = styled.table`
  width: 100%;
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Tr = styled.tr`
  height: 50px;
  &:nth-child(even) {
    background-color: #1dbf730f;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Th = styled.th`
  text-align: left;
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Td = styled.td`
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Image = styled.img`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const DeleteIcon = styled(AiTwotoneDelete)`
  width: 20px;
  cursor: pointer;
  font-size: 1.5rem;
  color: red;
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

function MyGigs() {
  return (
    <M>
      <Container>
        <Title>
          <TitleText>My Gigs</TitleText>
          <Link to="/add">
            <TitleBtn>Add new gig</TitleBtn>
          </Link>
        </Title>
        <TableContainer>
          <Table>
            <Tr>
              <Th>image</Th>
              <Th>title</Th>
              <Th>sales</Th>
              <Th>action</Th>
            </Tr>
            <Tr>
              <Td>
                <Image src={pic} />
              </Td>
              <Td>Gig1</Td>
              <Td>88</Td>
              <Td>123</Td>
              <Td>
                <DeleteIcon />
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Image src={pic} />
              </Td>
              <Td>Gig1</Td>
              <Td>88</Td>
              <Td>123</Td>
              <Td>
                <DeleteIcon />
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Image src={pic} />
              </Td>
              <Td>Gig1</Td>
              <Td>88</Td>
              <Td>123</Td>
              <Td>
                <DeleteIcon />
              </Td>
            </Tr>
          </Table>
        </TableContainer>
      </Container>
    </M>
  );
}

export default MyGigs;
