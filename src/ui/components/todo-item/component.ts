import Component, { tracked } from '@glimmer/component';
import { ENTER, ESCAPE } from '../../../utils/keys';

export default class TodoItem extends Component {
  element: Element;

  @tracked newTitle: string;
  @tracked editing: boolean = false;

  beginEdit() {
    this.editing = true;
    this.newTitle = this.args.todo.text;

    requestAnimationFrame(() => {
      let input = this.element.querySelector('.js-edit') as HTMLElement;
      input.focus();
    });
  }

  commitEdit() {
    if (this.editing) {
      this.editing = false;
      this.args.onEdit(this.args.todo.id, this.newTitle);
    }
  }

  abortEdit() {
    this.editing = false;
    this.newTitle = null;
  }

  handleEditKeyUp(event) {
    this.newTitle = event.target.value.trim();

    if (event.which === ENTER) {
      this.commitEdit();
    } else if (event.which === ESCAPE) {
      this.abortEdit();
    }
  }
}
