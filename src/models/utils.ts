let mapDefaultProps = (obj: any) => ((def) => ({ ...def[obj.name.toLowerCase()] }))

export {
  mapDefaultProps
}
