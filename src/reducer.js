export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //Remove after developing
  // token:
  //   "BQA0oDvJvvIK4pgUpiwdUqG_npxcDAMTp3QHoFwNhOqgFah3MYNtWAiY4nbh5d4XPhGhXdt0wnRyvBJYVs50MGQ-cnpD2WHjhONvDAFzErA2A5jx1_6T19kz10QXduQrMYboa4IVJLad9ytCitlau8pHHFJdzwE3cmUcMoaNTsjNOwnFYmUv",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
