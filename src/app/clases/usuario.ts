export class Usuario
{
    private nombre:string;
    private clave:string;

    public constructor(nombre:string,clave:string)
    {
        this.nombre=nombre;
        this.clave=clave;
    }

    public ToJson():string
    {
        let obj:any={};
        obj.nombre=this.nombre;
        obj.clave=this.clave;
        return JSON.stringify(obj);
    }
}
