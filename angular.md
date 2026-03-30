{1. constructor 2. ngOnChanges 3. ngOnInit 4. ngDoCheck 5. ngAfterContentInit 6. ngAfterContentChecked 7. ngAfterViewInit 8. ngAfterViewChecked 9. ngOnDestroy}
{
path: 'admin',
loadChildren: () => import('./admin.module').then(m => m.AdminModule)
}

{ 8. How to Optimize Angular App Performance?
✅ Answer:
Use OnPush change detection

Lazy loading modules

TrackBy in \*ngFor

Avoid unnecessary subscriptions

Use pure pipes

Optimize bundle (AOT, tree-shaking)}

{19. AOT vs JIT
✅ Answer:
AOT → compile at build time (faster)

JIT → compile at runtime

👉 Use AOT in production}

{

import { Observable } from 'rxjs';

const observable = new Observable((subscriber) => {
subscriber.next(1);
subscriber.next(2);
subscriber.next(3);
subscriber.complete();
});

observable.subscribe({
next: (value) => console.log("Value:", value),
complete: () => console.log("Done")
});

}
{Pure Pipe = reference change based
Impure Pipe = runs every time (even if data same)}
{
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
name: 'reverse'
})
export class ReversePipe implements PipeTransform {
transform(value: string): string {
return value.split('').reverse().join('');
}
}
}

{1. What is @Injectable?
👉 @Injectable is a decorator that marks a class as a service that can be injected.}

{

    2. What is providedIn?

👉 providedIn is a configuration option inside @Injectable
It tells Angular where to provide (register) the service.
}

{ When to use 'any'?
👉 Answer:

When you want separate instances per lazy module

}
