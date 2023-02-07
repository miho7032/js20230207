function load(elements, depth = 0) {
	elements.forEach(({ type, children, ...properties }) => {
		switch (type) {
			case 'button': {
				log(depth, '(Button)')
				log(depth, `- text: ${properties.text}`)
				break
			}
			case 'checkbox': {
				log(depth, '(CheckBox)')
				log(depth, `- value: ${properties.value}`)
				break
			}
			case 'container': {
				log(depth, '(Container)')
				log(depth, `- direction: ${properties.direction}`)
				log(depth, `- children: ${children.length}`)
				break
			}
			case 'image': {
				log(depth, '(Image)')
				log(depth, `- source: ${properties.source}`)
				log(depth, `- width: ${properties.width ?? '(Auto)'}`)
				log(depth, `- height: ${properties.height ?? '(Auto)'}`)
			}
		}
		if (Array.isArray(children)) {
			load(children, depth + 1)
		}
	})
}

function log(indent, message) {
	console.log(`${'\t'.repeat(indent)}${message}`)
}

load([require('./data.json')])
