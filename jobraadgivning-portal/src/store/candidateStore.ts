import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { candidates as initialCandidates } from '../data/candidatesdata';
import type { Candidate } from '../types';

export const useCandidateStore = defineStore('candidate', () => {
  const candidates = ref<Candidate[]>([...initialCandidates]);
  const searchedCandidates = ref<Candidate[]>([...candidates.value]);

  // Eksempel på en computed getter
  const allCandidates = computed(() => candidates.value);

  // Eksempel på en mutation/action
  const addCandidate = (candidate: Candidate): void => {
    candidates.value.push(candidate);
  }

  /**
   * Filter candidates based on search string and a set of search parameters to be used for filtering
   * @param search - The search string
   * @param searchParams - Optional search parameters to filter by, defaults to `firstname`, `lastname` and `email`
   * @returns The filtered candidates
   */
  const searchCandidates = (
    search: string, 
    searchParams: string[] = ['firstname', 'lastname', 'email']
  ): void => {
    if(search === '') {
      searchedCandidates.value = candidates.value;
      return;
    }

    // Filter candidates based on search parameters and search string
    searchedCandidates.value = candidates.value.filter((candidate) => {
      return searchParams.some((param) => {

        // Make sure the parameter is a valid key of the Candidate interface
        if(param in candidate) {
          return candidate[param as keyof Candidate]?.toLowerCase().includes(search.toLowerCase());
        }
        else {
          console.error(`Invalid search parameter: ${param}`);
          return false;
        }
      });
    });
  };


  return {
    allCandidates,
    searchedCandidates,
    addCandidate,
    searchCandidates,
  };
});