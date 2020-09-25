import React from 'react';
import ProviderInfoPresenter from './ProviderInfoPresenter';

const ProviderInfoContainer = props => {
  const { type, user, clientList, clientMemberList, itemList } = props;
  const { fetchClientAll, fetchItemList, fetchClientMemberList } = props;

  const { tbClientID } = user;

  const [client, setClient] = React.useState(null);
  React.useEffect(() => {
    handleFetchAll();
  }, [type, user]);

  React.useEffect(() => {
    clientList !== null && filterClient();
  }, [clientList]);

  const handleFetchAll = async () => {
    if (user === null) {
      return;
    }
    await fetchClientAll();
    await fetchItemList();
    await fetchClientMemberList(tbClientID);
    await fetchItemList(tbClientID);
  };

  const filterClient = async () => {
    if (user === null) return null;
    const cl = clientList.filter(item => item.clientID === tbClientID)[0];
    await setClient(cl);
  };

  return <ProviderInfoPresenter {...props} client={client} />;
};

export default ProviderInfoContainer;
