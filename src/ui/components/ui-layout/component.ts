import Component from '@glimmer/component';
import { ENTER } from '../../../utils/keys';
import { connect } from 'glimmer-redux';
import { getTodos } from '../../../reducers/todos';

const editTodo = (id, text) => dispatch => dispatch({type: 'EDIT_TODO', id, text});
const addTodo = text => dispatch => dispatch({type: 'ADD_TODO', text});
const deleteTodo = id => dispatch => dispatch({type: 'DELETE_TODO', id});

class LayoutComponent extends Component {

  handleNewTodoKeyDown(event) {
    if (event.which === ENTER) {
      let value = event.target.value.trim();

      if (value.length > 0) {
        this.addTodo(value);
      }

      event.target.value = '';
    }
  }

}

const stateToComputed = state => ({
  todos: getTodos(state)
});

const dispatchToActions = {
  addTodo,
  deleteTodo,
  editTodo
}

export default connect(stateToComputed, dispatchToActions)(LayoutComponent);
