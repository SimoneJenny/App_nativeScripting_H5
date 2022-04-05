import { EventData, Page, NavigatedData, Label, Frame, Button, TextField } from '@nativescript/core'
import { MyObservable } from './MyObservable' //min binding med værdier ref

//Initalisers 
var page: Page;
var myObservable: MyObservable; //binding
var Result: Label;
var Value1: Label;
var Value2: Label;
var skrift = "Tal mangler"; //Test prøve

export function onNavigatingTo(args: NavigatedData) {
 
  //henter obj. så jeg kan lave getviewById
  page = <Page>args.object; //Caster Page <>
  //kalder på vores observerble  (binde med)
  page.bindingContext = new MyObservable(); 
 
//Tjekker om brugeren har været inde på siden med et tal i forvejen:
//hvis den IKKE har skal den lave en  binding med myobservable
  if(!args.isBackNavigation){
    myObservable = new MyObservable();
  }
  //hvis den har et tal i forevejen skal den smide værdien ned i vores value 1 /value 2
  else
  {
    var Value1: Label = page.getViewById("Value1");
    var Value2: Label = page.getViewById("Value2");
  //denne if tjekker om om values id er lig med observables number
if(Value1.id == myObservable.number)
    {
        Value1.text = myObservable.values; //og skriver value 1  ud i teksten op side 1
    }
      //samme som if - bare med value 2
    else if(Value2.id == myObservable.number)
    {
    Value2.text = myObservable.values;
    }
    //ellers udskriv fejl i loggen
    else{console.log("Fejl opstået");}
    }
}
//i denne funktion kaldes der på onGetValue (eventhandler - btn1 og btn2)
//via getviewbyId finder vi en visning som er identfiieret af vores attribut fra XML
export function onGetValue(args:EventData){
  var Value1: Label = page.getViewById("Value1");
  var Value2: Label = page.getViewById("Value2");
  var button: Button = <Button>args.object;
  //tjekker om der er trykket på knap 1 eller 2 /tal 1 eller tal 2
  //og lægger value 1 eller 2 i number-observable
  switch(button.id){
    case "btn1":
      myObservable.number = Value1.id;
      break
    case "btn2":
      myObservable.number = Value2.id;
      break
      default:        
  }

  //navigere til siden /dens muligheder
  var navigationOptions ={
    moduleName: 'Side2/sideTo-page', //sti til side2 
    context:
    {
      myObservable: myObservable, //binding
      param1: "nummer"
    }
  }

  //topmost() returnere den sidste frame som navigationen har kaldt
  Frame.topmost().navigate(navigationOptions); //putter øverst i
}

// Her kalder jeg min onTap fra xml filen dvs. mine 'regnestykker'
export function onTap(args:EventData)
{
    
//Finds a view that was identified by the id attribute from the XML layout resource.
    Result = page.getViewById("Result");
    Value1 = page.getViewById("Value1");
    Value2 = page.getViewById("Value2");
    var btnTap: Button = <Button>args.object;

    page = btnTap.page;
    //denne linje kalder på parent = 
    //parent Frame er en funktionsevalusering i et miljø hvor funtionen er kaldt.
    btnTap.parent.page.frame;

    //Switch til valg af regnemuligheder 
    switch(btnTap.id)
    {
        case "plus":
        Result.text =(+Value1.text + +Value2.text).toString();
        console.log("du har plusset");
        break;
        case "minus":
        Result.text = (+Value1.text - +Value2.text).toString();
        console.log("du har minusset");
        break;
        case "gange":
        Result.text = (+Value1.text * +Value2.text).toString();
        console.log("du har ganget");
        break;
        case "dividere":
        Result.text = (+Value1.text / +Value2.text).toString();
        console.log("du har divideret");
        break;
        case "kvadrat":
        Result.text = (+Value1.text ^ +Value2.text).toString();
        console.log("du har fundet kvadratroden");
        break;
        default:
        console.log("du har ikke valgt noget endnu")
    }
    }