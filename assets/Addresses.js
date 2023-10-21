const lumenServer = process.env.LUMEN_INTERNAL_API_SERVER
const authServer = process.env.AUTH_INTERNAL_API_SERVER

const API_ADDRESS = {
  server: {
    lumen: lumenServer,
    auth: authServer
  },
  auth: {
    login: authServer + '/login'
  },
  product: {
    base: authServer + '/admin/bonyadEhsan/order',
    delete: authServer + '/admin/bonyadEhsan/order/'
  },
  editLimit:{
    base: authServer + '/admin/bonyadEhsan/studentLimit'
  },
  delete: {
    base: (userId) => authServer + '/admin/bonyadEhsan/delete/' + userId
  },
  moshaver: {
    edit: (userId) => authServer + '/admin/bonyadEhsan/user/' + userId,
    update: authServer + '/admin/bonyadEhsan/user/',
    create: authServer + '/admin/bonyadEhsan/moshaver',
    bulkCreate: authServer + '/admin/bonyadEhsan/groupUser',
    product: authServer + '/admin/bonyadEhsan/selectOption',
    base: authServer + '/user',
    mobile: {
      resend: authServer + '/mobile/resend',
      verify: authServer + '/mobile/verify'
    },
    formData: authServer + '/megaroute/getUserFormData',
    show_user: authServer + '/getUserFor3a'
  },
  liveDescription:{
    create: authServer + '/livedescription',
    edit: (userId) => authServer + '/livedescription/' + userId,
    pin: (userId) => authServer + '/livedescription/' + userId + '/pin',
    unpin: (userId) => authServer + '/livedescription/' + userId + '/unpin'
  },
  network: {
    create: authServer + '/admin/bonyadEhsan/network',
    bulkCreate: authServer + '/admin/bonyadEhsan/groupUser',
  },
  subnetwork: {
    create: authServer + '/admin/bonyadEhsan/subNetwork',
    bulkCreate: authServer + '/admin/bonyadEhsan/groupUser',
  },
  user: {
    info: authServer + '/admin/bonyadEhsan/user/myInfo',
    update: authServer + '/admin/bonyadEhsan/user/',
    bulkCreate: authServer + '/admin/bonyadEhsan/groupUser', // {users, type} (type: student - moshaver - subnetwork - network)
    create: authServer + '/admin/bonyadEhsan/user',
    base: authServer + '/user',
    mobile: {
      resend: authServer + '/mobile/resend',
      verify: authServer + '/mobile/verify'
    },
    formData: authServer + '/megaroute/getUserFormData',
    show_user: authServer + '/getUserFor3a'
  },
  set: {
    base: authServer + '/set',
  },
  content: {
    base: authServer + '/c',
  },
  option: {
    base: lumenServer + '/option'
  },
  exam: {
    usersOfBonyad : authServer + '/exam/getUsersOfBonyad',
    rankChart: authServer + '/exam/rank-chart',
    userRank: authServer + '/exam/user-rank',
    averageRank: authServer + '/exam/averageRank',
    editExam: lumenServer + '/exam',
    sendAnswers: lumenServer + '/temp-exam/answer/choice',
    sendAnswerSheetPhoto: lumenServer + '/temp-exam/scan',
    sendScannedAnswers: lumenServer + '/temp-exam/scan/import',
    sendAnswersAfterExam: lumenServer + '/temp-exam/answer/choice/v2',
    sendStatus: lumenServer + '/temp-exam/answer/status',
    sendBookmark: lumenServer + '/temp-exam/answer/bookmark',
    sendUnBookmark: lumenServer + '/temp-exam/answer/unbookmark',
    userExamsList: lumenServer + '/examAndUser',
    takhminRotbe: lumenServer + '/exam-report/rankSimulator',
    analysisVideo: lumenServer + '/exam-question/attach/sub-category',
    checkExport (id){
      return authServer + '/exam/check-export/' + id
    },
    getUsersOfBonyad (id, mode, pageNumber) {
      if (mode) {
        return authServer + '/exam/getUsersOfBonyad?action=' + mode + '&page=' + pageNumber
      }
      if (!id) {
        return authServer + '/exam/getUsersOfBonyad' + '?page=' + pageNumber
      }
      return authServer + '/exam/getUsersOfBonyad?user_id=' + id + '&page=' + pageNumber
    },
    getRankChart (id, major) { return authServer + '/exam/rank-chart?user_id=' + id + '&major=' + major },
    getUserRank (id, major) { return authServer + '/exam/user-rank?user_id=' + id + '&major=' + major },
    getAverageRank (id, major) { return authServer + '/exam/averageRank?user_id=' + id + '&major=' + major },
    getAnalysisVideo (exam_id) { return lumenServer + '/exam-question/videos/' + exam_id },
    examReportIndex (type) { return lumenServer + '/exam-report/index/' + type },
    pdf (exam_id) { return lumenServer + '/exam-question/booklet-file/' +exam_id },
    base (page_number, pagination = true) {
      if (pagination) {
        if (page_number) {
          return lumenServer + '/exam?with_pagination=1&page=' + page_number
        } else {
          return lumenServer + '/exam'
        }
      } else {
        return lumenServer + '/exam?with_pagination=0'
      }
    },
    generateExamFile (exam_id, with_answer) {
      const baseFileRoute = lumenServer + '/exam-question/file/' + exam_id
      return with_answer ? (baseFileRoute + '/with_answer') : baseFileRoute
    },
    getAnswerOfUser (user_exam_id) {
      return lumenServer + '/temp-exam/answer/'+user_exam_id
    },
    getAllAnswerOfUser (user_exam_id) {
      return lumenServer + '/temp-exam/allAnswer/'+user_exam_id
    },
    getSubCategoriesWithPermissions (exam_id) {
      return lumenServer + '/exam-question/show/sub-categories/'+ exam_id
    },
    getAnswerOfUserWithCorrect (user_exam_id) {
      return lumenServer + '/temp-exam/answer/'+user_exam_id+'/withCorrect'
    },
    registerExam: lumenServer + '/user/registerExam',
    examUser: lumenServer + '/exam-user',
    examUserAfterExam: lumenServer + '/exam-user/show',
    examQuestion (quizId) {
      return lumenServer + '/exam-question/attach/show/' + quizId
    },
    report: {
      getReport (userExamId) {
        return lumenServer + '/exam-report/show?user_exam_id=' + userExamId
      },
      updateReportOptions (examId) {
        return lumenServer + '/exam/config/' + examId
      }
    },
    examBookletUpload (exam_id) {
      return lumenServer + '/exam-question/booklet-file/' + exam_id
    }
  },
  log: {
    base: lumenServer + '/activity-log',
    addComment (id) {
      return lumenServer + '/activity-log/' + id + '/comment'
    }
  },
  question: {
    indexMonta: lumenServer + '/question/search-monta',
    index (statuses, page) {
      statuses = statuses.join('&statuses[]=')
      if (statuses) {
        statuses = '&statuses[]=' + statuses
      }

      if (typeof page !== 'undefined') {
        page = '&page='+page
      } else {
        page = ''
      }
      let queryParam = statuses + page
      if (queryParam.length > 0) {
        queryParam = queryParam.substr(1)
      }
      return lumenServer + '/question?'+queryParam
    },
    status: {
      base: lumenServer + '/question/statuses',
      changeStatus (questionId) {
        return lumenServer + '/question/' + questionId + '/status'
      }
    },
    log: {
      base (questionId, pagination) {
        if (!pagination) {
          pagination = 0
        }
        return lumenServer + '/activity-log?subject_id='+questionId+'&subject=question&title=update&description=update_question_status&with_pagination=0'
      },
    },
    base: lumenServer + '/exam-question/attach',
    createAndAttach: () => lumenServer + '/exam-question/attach/' ,
    create: lumenServer + '/question',
    attachSubCategoryToQuestion: lumenServer + '/exam-question/attach/sub-category',
    updateQuestion (questionId) {
      return lumenServer + '/question/' + questionId
    },
    attach: lumenServer + '/exam-question/attach/v2',
    detach (questionId) {
      return lumenServer + '/exam-question/detach/'+questionId
    },
    delete (questionId) {
      return lumenServer + '/question/'+questionId
    },
    getCurrentQuestion (questionId) {
      return lumenServer + '/question/' + questionId
    },
    confirm (questionId) {
      return lumenServer + '/question/confirm/' + questionId
    },
    uploadImage (questionId) {
      return lumenServer + '/question/upload/' + questionId
    }
  },
  questionSubcategory: {
    base: lumenServer + '/sub-category',
    update (id) {
      return lumenServer + '/sub-category/' + id
    }
  },
  questionCategory: {
    base: lumenServer + '/category',
    update (id) {
      return lumenServer + '/category/' + id
    }
  },
  subGroups : {
    base (exam_id) {
      return lumenServer + '/exam-question/zirgorooh/' + exam_id
    },
    all () {
      return lumenServer + '/option?with_pagination=0&type=zirgorooh_type'
    }
  }
}
export default API_ADDRESS
