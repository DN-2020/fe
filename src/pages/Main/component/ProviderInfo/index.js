import ProviderInfoContainer from './ProviderInfoContainer';
import { connect } from 'react-redux';
import { actionCreators as CommonActions } from '../../../../redux/modules/common/actions';
import { actionCreators as ClientActions } from '../../../../redux/modules/client/actions';
import { actionCreators as ItemActions } from '../../../../redux/modules/item/actions';

export default connect(
  ({ common, client, item }) => ({
    user: common.user,
    type: common.type,
    itemList: item.itemList,
    clientList: client.clientList,
    clientMemberList: client.clientMemberList
  }),
  dispatch => ({
    fetchClientAll: () => dispatch(ClientActions.fetchClientALl()),
    fetchItemList: id => dispatch(ItemActions.fetchItemByClientID(id)),
    fetchClientMemberList: cliendID =>
      dispatch(ClientActions.fetchClientMemberByID(cliendID))
  })
)(ProviderInfoContainer);
