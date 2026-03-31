1.  Parent → Child Communication (@Input())
    Used when parent sends data to child

🔹 Parent Component
@Component({
selector: 'app-parent',
template: `<app-child [message]="parentMessage"></app-child>`
})
export class ParentComponent {
parentMessage = "Hello from Parent";
}
🔹 Child Component
@Component({
selector: 'app-child',
template: `<p>{{message}}</p>`
})
export class ChildComponent {
@Input() message!: string;
}
👉 Flow: Parent ➝ Child (one-way data binding)

✅ 2. Child → Parent Communication (@Output() + EventEmitter)
Used when child sends data to parent

🔹 Child Component
@Component({
selector: 'app-child',
template: `<button (click)="sendData()">Send to Parent</button>`
})
export class ChildComponent {
@Output() notify = new EventEmitter<string>();

sendData() {
this.notify.emit("Hello from Child");
}
}
🔹 Parent Component
@Component({
selector: 'app-parent',
template: `<app-child (notify)="receiveData($event)"></app-child>`
})
export class ParentComponent {

receiveData(message: string) {
console.log(message);
}
}
