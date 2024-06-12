import { BaseHandler } from "../abstract-handle"

export class NumberHandler extends BaseHandler {
  handle(request: string): string | null {
    if (/^\d+$/.test(request)) {
      return `Handled number: ${request}`
    } else {
      return super.handle(request)
    }
  }
}