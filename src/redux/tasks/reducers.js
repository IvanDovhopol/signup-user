export const fetchTasksFulfilled = (state, action) => {
  state.items = action.payload;
};

export const addTaskFulfilled = (state, action) => {
  state.items.push(action.payload);
};

export const deleteTaskFulfilled = (state, action) => {
  const index = state.items.findIndex(contact => contact.id === action.payload);
  state.items.splice(index, 1);
};

export const logOutFulfilled = state => {
  state.items = [];
  state.error = null;
  state.isLoading = false;
};

export const anyPending = state => {
  state.isLoading = true;
};

export const anyFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const anyRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
