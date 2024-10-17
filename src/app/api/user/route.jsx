
import { NextResponse } from "next/server";

export function GET(request) {
    const studentdata = [
        { name: 'shaikh', age: 22, state: 'odisha', dist: 'balasore' },
        { name: 'surender', age: 70, state: 'rajasthan', dist: 'Jodhpur' },
        {name: 'shakir', age: 28, state: 'rajasthan', dist: 'jodhpur'}    
    ];
    return NextResponse.json(studentdata);
}
