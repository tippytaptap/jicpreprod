import React from'react';import{cn}from'@/lib/utils';export function Button({className='',...props}){return <button className={cn('rounded-full px-5 py-3 font-semibold',className)} {...props}/>}
