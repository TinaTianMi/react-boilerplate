import createAsyncAction from 'utils/createAsyncAction';

function getDemoMessage() {
  return createAsyncAction('DEMO_GET_MESSAGE', () => (
    Promise.resolve({
      data: 'show the demo message',
    })
  ));
}

export default {
  getDemoMessage,
};