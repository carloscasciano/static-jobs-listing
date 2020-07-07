export const filteredJobArrayBuilder = (jobPost) => {
    let resultArray = []
    resultArray = resultArray.concat(jobPost.level).concat(jobPost.role).concat(jobPost.languages)
    return resultArray
}