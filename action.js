module.exports = function(loader, toggl, timeSlotter, asker, config) {

  this.run = async () => {
    const moment = loader.load('moment')
    const start = moment().startOf("year")
    const end = moment().endOf("year")
    const festives = await timeSlotter.daysApi.festiveDaysIn(start, end)

    festives.sort(sorter).forEach(element => {
      console.log(element.format('ll'))
    });
  }

  this.help = () => {
    return "show holidays on actual year"
  }
}

function sorter(moment1, moment2) {
  return moment1.diff(moment2)
}