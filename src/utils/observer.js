//Generalized Intersection Observer hook
//Usage: observer(target, callback)
//target: DOM element (i.e ref.current)
//callback: function to be called when target is intersecting or your required tasks
export const observer = (target, callback) => {
    return (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (target) {
                    callback()

                    observer.unobserve(target)
                }
            }
        }
        )
    }

}