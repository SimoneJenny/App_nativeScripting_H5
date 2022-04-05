import { EventData, Page, NavigatedData, Label, TextField } from '@nativescript/core'
import { MyObservable } from 'app/MyObservable' //binding ref

//initalizere 
var myObservable: MyObservable;
var page: Page;

//Her tjekkes der om værdien er kommet med ind 
export function onNavigatingTo(args: EventData)
{
    // //henter obj. så jeg kan lave getviewById
    page = <Page>args.object;
    //kalder på vores observerble  (binde med)
    myObservable = page.navigationContext.myObservable;
    //jeg får ToNr via getviewbyId  dvs. finder en visning som er identfiieret af vores attribut fra XML
    var label: Label = page.getViewById("ToNr"); 
    label.text = myObservable.number; 
}
//her kalder vi GiveBackValueon fra vores xml (button)
export function GiveBackValueon(args: EventData) 
{
    var valueBack: TextField = page.getViewById("ValueToNr"); 
    myObservable.values = valueBack.text; //vores tekst
    page.frame.goBack(); //tilbage til forsiden
}



