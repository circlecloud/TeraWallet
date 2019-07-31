import { Dispatch } from "./types";

let mapModelProps = (name: string) => ((def: { [x: string]: any; }) => ({ ...def[name] }))
let mapModelActions = (name: string, actions: { [key: string]: string }) => ((dispatch: Dispatch) => {
  let acts = Object.keys(actions).map(action => {
    return {
      [action]: function __run(args: any) {
        dispatch({
          type: `${name}/${action}`,
          payload: args
        })
      }
    }
  }).reduce((p, n) => ({ ...p, ...n }))
  return { ...acts, dispatch }
})

export {
  mapModelProps,
  mapModelActions
}
