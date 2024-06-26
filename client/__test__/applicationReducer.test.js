import applicationsReducer from '../src/redux/reducers/applicationsReducer';
/**
 * One of the main benefits of reducers is how testable they are. Since they're
 * pure (in theory), all we have to do is look at the inputs and outputs. We
 * can also add some tests to determine if the reducer really is pure!
 */
describe('Application reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      appList: [],
      totalApps: 0,
      // companyName: '',
      // dateApplied: '',
      // notes: '',
      // role: '',
      // status: '',
    };
  });

  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(applicationsReducer(undefined, { type: undefined })).toEqual(
        state
      );
    });
  });

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'aajsbicawlbejckr' };
      expect(applicationsReducer(state, action)).toBe(state);
    });
  });

  describe('ADD_APP', () => {
    const action = {
      type: 'ADD_APP',
      payload: {
        companyName: 'Google',
        dateApplied: 'June 18th, 2024',
        status: 'Applied',
        role: 'Coder',
        notes: 'asdasd',
        appId: 1,
      },
    };

    it('adds a app', () => {
      const { appList } = applicationsReducer(state, action);
      expect(appList[0]).toEqual(action.payload);
    });

    it('increases total app count by 1', () => {
      const { totalApps } = applicationsReducer(state, action);
      expect(totalApps).toEqual(1);
    });

    it('returns a state object not strictly equal to the original', () => {
      expect(applicationsReducer(state, action)).not.toBe(state);
    });

    it('includes a appList not strictly equal to the original', () => {
      const { appList } = applicationsReducer(state, action);
      expect(appList).not.toBe(state.appList);
    });

    // xit('clears the newLocation field', () => {
    //   const { newLocation } = applicationsReducer(state, action);
    //   expect(newLocation).toEqual(state.newLocation);
    // });
  });

  describe('SET_STATUS', () => {
    let state = {
      appList: [
        {
          companyName: 'Mcdonalds',
          dateApplied: '06/18/2024',
          status: 'Rejected',
          role: 'SWE',
          notes: 'Hello',
          appId: 1,
        },
      ],
      totalApps: 1,
    };

    const action = {
      type: 'SET_STATUS',
      payload: {
        companyName: 'Mcdonalds',
        status: 'Initial Interview',
        appId: 1,
      },
    };

    it('updates status with the action payload', () => {
      const newApp = applicationsReducer(state, action);
      expect(newApp.appList[0].status).toEqual(action.payload.status);
    });

    it('returns a state object not strictly equal to the original', () => {
      expect(applicationsReducer(state, action)).not.toBe(state);
    });

    xit("doesn't touch the appList array", () => {
      const { appList } = applicationsReducer(state, action);
      expect(appList).toBe(appList);
    });
  });
  /*
   * Note: the rest of these tests are an EXTENSION. You should move on
   * to Enzyme testing, and come back to these later. Optionally, you may
   * just do ADD_CARD now, and come back to the rest of these redux tests later.
   */
  describe('SET_NOTES', () => {
    let state = {
      appList: [
        {
          appId: 2,
          companyName: 'Mcdonalds',
          dateApplied: '06/18/2024',
          status: 'Rejected',
          role: 'SWE',
          notes: 'Hello',
        },
      ],
      totalApps: 1,
    };

    const action = {
      type: 'SET_NOTES',
      payload: {
        appId: 2,
        companyName: 'Mcdonalds',
        notes: 'Goodbye World',
      },
    };

    it('Updates notes with the action payload', () => {
      const newApp = applicationsReducer(state, action);
      expect(newApp.appList[0].notes).toEqual(action.payload.notes);
    });

    it('Returns a state object not strictly equal to the original', () => {
      expect(applicationsReducer(state, action)).not.toBe(state);
    });

    // xit('does not mutate or duplicate other markets in marketList', () => {});
  });

  describe('DELETE_CARD', () => {
    let state = {
      appList: [
        {
          appId: 3,
          companyName: 'Google',
          dateApplied: 'June 18th, 2024',
          status: 'Applied',
          role: 'Coder',
          notes: 'asdasd',
        },
        {
          appId: 4,
          companyName: 'Amazon',
          dateApplied: 'June 17th, 2024',
          status: 'Applied',
          role: 'Coder',
          notes: 'asdasd',
        },
      ],
      totalApps: 2,
    };

    const action = {
      type: 'DELETE_APP',
      payload: {
        appId: 3,
      },
    };

    it('removed application from App list specified by payload', () => {
      const newAppList = applicationsReducer(state, action);
      expect(state.appList).not.toEqual(newAppList.appList);
    });

    it('decreases total apps count by 1', () => {
      const newAppList = applicationsReducer(state, action);
      expect(state.totalApps).not.toEqual(newAppList.totalApps);
      
    });

    // xit('includes a marketList not strictly equal to the original', () => {});

    // xit('does not mutate or duplicate other markets in marketList', () => {});
  });

  // The rest is functionality not included in the original MegaMarkets unit.
  // In short:
  //   1. SYNC_MARKETS is our action for writing markets to our "database." The
  //   only part of client state it affects is the "synced" property on
  //   markets, which activates/deactivates the button.
  //   2. LOAD_MARKETS only happens once, on page load, to load up markets from
  //   the database.
  // describe('SYNC_MARKETS', () => {
  //   xit('sets synced to true', () => {});
  // });

  // describe('LOAD_MARKETS', () => {
  //   xit('replaces its marketList with the payload as-is', () => {});

  //   xit('sets the correct totalMarkets count', () => {});

  //   xit('sets the correct totalCards count', () => {});
  // });
});
