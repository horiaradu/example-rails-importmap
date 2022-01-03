import { Application } from "@hotwired/stimulus"
import foo from "../foo"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

foo();

export { application }
