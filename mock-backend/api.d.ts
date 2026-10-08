export type MockDb = Record<string, unknown>;

export interface MockApi {
	handle(
		method: string,
		url: URL,
		body?: Record<string, unknown>,
	): { status: number; body: unknown };
}

export function createSeedDb(): MockDb;
export function createMockApi(db: MockDb, saveDb: () => void): MockApi;
