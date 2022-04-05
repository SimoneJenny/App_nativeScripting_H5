import { Label, Observable } from "@nativescript/core";

export class MyObservable extends Observable
{
    //oberservable er når et object arver fra denne klase
     private _missing: number;
     private _number: string;
     private _Result: string;
     private _Value1: string;
     private _Value2: string;

     //Properties /get & set
     //constructor
     constructor()
     {
         super(); //En constructor skal kalde super.
         this._Result;
         this._number;
         this._Value1;
         this._Value2;
         this._missing = 0;
     }

     //number
     set number(value: string)
     {
        this._number = value;
     }
     get number(): string
     {
         return this._number;
     }

     //values som også bliver vist inde på vores app 
     set values(value: string)
     {
         this._Result = value;
     }
     get values(): string
     {
        return this._Result;
     }    

     
     //values som også bliver vist inde på vores app 
     set result(value: string)
     {
         this._Result = value;
     }
     get Result(): string
     {
        return this._Result;
     }  

     //values som også bliver vist inde på vores app 
     set Value1(value: string)
     {
         this._Value1 = value;
     }
     get Value1(): string
     {
        return this._Value1;
     } 
     
     //values som også bliver vist inde på vores app 
     set Value2(value: string)
     {
         this._Value2 = value;
     }
     get Value2(): string
     {
        return this._Value2;
     }  

    //missing
     set missing(value: number)
     {
         this._missing = value;
     }
     get missing(): number
     {
        return this._missing;
     }  

     

}