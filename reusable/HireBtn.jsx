function HireBtn({children,text,classes,...rest}) {
    return ( 
    <>
      <button className={`${classes}`} 
      {...rest}>
           {text}{children}
        </button>
    </>
     );
}

export default HireBtn;