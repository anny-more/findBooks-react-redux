export default function Button(props, children: string, callback: MouseEventHandler<HTMLButtonElement> | undefined) {
    return (
        <button className='search button_wide' onClick={callback}>
          <h3>{children}</h3>
        </button>
    )

}