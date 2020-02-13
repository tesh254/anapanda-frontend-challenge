import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class TopNavComponent extends Component {
  @tracked active = true;
  @tracked complete_active = false;

  @action
  changeTab(tab) {
    if (tab === "complete_tab") {
      this.active = false;
      this.complete_active = true;
    } else {
      this.active = true;
      this.complete_active = false;
    }
  }
}
