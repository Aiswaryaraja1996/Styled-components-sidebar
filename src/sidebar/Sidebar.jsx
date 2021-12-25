import styled from "styled-components";

const Drawer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  width: 16%;
  margin: auto;
  box-shadow:4px 4px lightgray;

  > * {
    &:not(:first-child) {
      display: flex;
      gap: 1rem;
      align-items: center;
      font-size: 1.25rem;
      margin-left: 1rem;
    }
  }
`;

const Line = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: .5px;
  background-color: lightgray;
`;

const DrawerItem = ({ label, icon }) => {
  return (
    <div>
      <img height="28px" src={icon} alt={label} />
      <p>{label}</p>
    </div>
  );
};

export default function Sidebar() {
  return (
    <div>
      <Drawer>
        <Line />
        <DrawerItem
          label="Inbox"
          icon="https://cdn-icons.flaticon.com/png/512/2915/premium/2915744.png?token=exp=1640440574~hmac=600dca4d25c3e8885c1839bd175295c2"
        />
        <DrawerItem
          label="Starred"
          icon="https://cdn-icons.flaticon.com/png/512/2893/premium/2893811.png?token=exp=1640441567~hmac=ddd33c760b817da3ea4e211c96ca9072"
        />
        <DrawerItem
          label="Send email"
          icon="https://cdn-icons.flaticon.com/png/512/3171/premium/3171060.png?token=exp=1640441606~hmac=62ef2c1c0011a5a5e39f89a094300bbd"
        />
        <DrawerItem
          label="Drafts"
          icon="https://cdn-icons.flaticon.com/png/512/1804/premium/1804945.png?token=exp=1640441629~hmac=9d3c8062a4fa646c9c22b9936f2b8d29"
        />
      </Drawer>
    </div>
  );
}
