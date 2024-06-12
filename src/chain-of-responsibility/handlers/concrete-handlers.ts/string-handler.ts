import { BaseHandler } from "../abstract-handle"

export class StringHandler extends BaseHandler {
  handle(request: string): string | null {
    if (/^[a-zA-Z]+$/.test(request)) {
      return `Handled string: ${request}`
    } else {
      return super.handle(request)
    }
  }
}